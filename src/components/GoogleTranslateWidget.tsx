"use client";

import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, CircularProgress, Typography, SelectChangeEvent } from '@mui/material';

interface Language {
  code: string;
  name: string;
}

const GoogleTranslateWidget = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [originalContent, setOriginalContent] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationProgress, setTranslationProgress] = useState<number>(0);

  // List of supported languages
  const languages: Language[] = [
    { code: '', name: 'Select Language' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' }
  ];

  // Save original content on first load
  useEffect(() => {
    const saveOriginalContent = () => {
      const blogContent = document.querySelector('.blog-content');
      if (blogContent && !originalContent) {
        setOriginalContent(blogContent.innerHTML);
      }
    };

    saveOriginalContent();
    const timer = setTimeout(saveOriginalContent, 1000);
    return () => clearTimeout(timer);
  }, [originalContent]);

  const handleLanguageChange = async (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);
    
    if (newLang === 'en' || newLang === '') {
      restoreOriginalContent();
    } else {
      await translateContent(newLang);
    }
  };
  
  const restoreOriginalContent = () => {
    if (originalContent) {
      const blogContent = document.querySelector('.blog-content');
      if (blogContent) {
        blogContent.innerHTML = originalContent;
      }
    }
  };
  
  const translateContent = async (targetLang: string) => {
    setIsTranslating(true);
    setTranslationProgress(0);

    try {
      const blogContent = document.querySelector('.blog-content');
      if (!blogContent) return;

      const textNodes: Node[] = [];
      const walk = document.createTreeWalker(
        blogContent,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            if (parent.tagName === 'SCRIPT' || 
                parent.tagName === 'STYLE' || 
                parent.classList.contains('notranslate')) {
              return NodeFilter.FILTER_REJECT;
            }
            return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        }
      );

      let node;
      while (node = walk.nextNode()) {
        textNodes.push(node);
      }

      const totalNodes = textNodes.length;
      let translatedCount = 0;

      for (const node of textNodes) {
        if (node.textContent) {
          try {
            const translatedText = await translateText(node.textContent, targetLang);
            if (translatedText && translatedText !== node.textContent) {
              node.textContent = translatedText;
            }
          } catch (error) {
            console.error('Translation error:', error);
          }
        }
        translatedCount++;
        setTranslationProgress((translatedCount / totalNodes) * 100);
      }
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };
  
  const translateText = async (text: string, targetLang: string): Promise<string> => {
    if (!text || text.trim().length === 0) return text;
    
    try {
      const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(googleUrl);
      const data = await response.json();
      
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        return data[0][0][0];
      }

      const lingvaLang = targetLang === 'zh' ? 'zh_cn' : targetLang;
      const lingvaUrl = `https://lingva.ml/api/v1/en/${lingvaLang}/${encodeURIComponent(text)}`;
      const lingvaResponse = await fetch(lingvaUrl);
      const lingvaData = await lingvaResponse.json();
      
      if (lingvaData && lingvaData.translation) {
        return lingvaData.translation;
      }

      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  return (
    <div style={{ 
      position: 'fixed',
      top: '120px',
      right: '20px',
      zIndex: 1500,
      backgroundColor: 'transparent'
    }}>
      <FormControl 
        size="small"
        sx={{
          '& .MuiSelect-select': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '8px',
            width: '240px',
            padding: '8px 14px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
            border: 'none',
            '&:focus': {
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(0, 0, 0, 0.7)',
            backgroundColor: 'transparent',
            padding: '0 4px',
            '&.Mui-focused': {
              color: 'rgba(0, 0, 0, 0.9)'
            }
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }}
      >
        <InputLabel>Select Language</InputLabel>
        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          label="Select Language"
          disabled={isTranslating}
          MenuProps={{
            PopoverClasses: {
              root: 'language-select-popover'
            },
            PaperProps: {
              sx: {
                mt: 1,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(8px)',
                maxHeight: '300px',
                width: '240px'
              }
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            style: { zIndex: 1500 }
          }}
        >
          {languages.map((lang) => (
            <MenuItem 
              key={lang.code} 
              value={lang.code}
              sx={{
                fontSize: '0.95rem',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {lang.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isTranslating && (
        <div style={{
          marginTop: '8px',
          padding: '8px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <CircularProgress size={20} />
          <Typography variant="body2">
            Translating... {Math.round(translationProgress)}%
          </Typography>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslateWidget;