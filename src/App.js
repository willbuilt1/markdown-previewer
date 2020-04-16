import React from 'react';
import './App.css';
import marked from 'marked';
import DOMPurify from 'dompurify';

function App() {
  const [editor, setEditor] = React.useState('Look at me!!!')
  const onEditorChange = (event) => {
    setEditor(event.target.value)
  }
  return (
    <div>
      <textarea name="editor" id="editor" cols="30" rows="10" value={editor} onChange = {onEditorChange}></textarea>
      <Preview output={editor}/>
    </div>
  );
} 

function Preview({output}){

  // const cleanMarkdown = () => DOMPurify.sanitize('<h1>Welcome to my React Markdown Previewer!</h1>')

  return(
  <div id="preview">{marked(output)}</div>
  )
}

export default App;
