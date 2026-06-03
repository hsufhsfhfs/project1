import React, { useState } from 'react';
const ARTICLES = [
  { id: 1, title: "Understanding the difference between grid-template and grid-auto" },
  { id: 2, title: "CSS grid vs flexbox : what to know?" },
  { id: 3, title: "Getting started with React by AC" },
  { id: 4, title: "Mastering Advanced JS using array methods" },
  { id: 5, title: "A complete HTML semantic elements to know" },
];
export default function TextSearchProject() {
  const [searchTerm, setSearchTerm} = useState('');
  const filteredArticles = ARTICLES.filter( article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const highlightText = (text, highlight)
    if (!highlight.trim()) return text;
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => regex.test(part) ? (
    <mark key={i} style={{ backgroundColor: '#ffd54f', color: '#000', fontWeight: 'bold' }}>
      {part}
    </mark>
    ) : (
       part
    )
    );
};
return (
  <div style= {{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '20px' }}>
    <h2> Search</h2>
    <div style= {{ position: 'relative', marginBottom: '20px' }}>
      <input type= "text" placeholder="Type keyword (e.g. grid)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        style={{
            width: '100%',
            padding: '12px 40px 12px 12px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#888'
            }}
          >
            ✕
          </button>
        )}
      </div>

      
      <p style={{ fontWeight: 'bold', color: '#555' }}>
        {filteredArticles.length} {filteredArticles.length === 1 ? 'post was' : 'posts were'} found.
      </p>

      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredArticles.map(article => (
          <li key={article.id} style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}>
            <h3 style={{ margin: 0, fontSize: '18px', lineHeight: '1.4' }}>
              {highlightText(article.title, searchTerm)}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
