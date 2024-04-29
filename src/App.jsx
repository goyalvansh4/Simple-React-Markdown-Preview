import { useState } from "react";
import "./App.css";
// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import {marked} from "marked";

function App() {
  let [content, setContent] = useState("");
  let [heightedit,setHeightEdit] = useState("auto");
  let [heightprev,setHeightPrev] = useState("auto");
  let [dis,setDis]= useState("flex");
  const handleChange = (e) => {
    console.log(e.target.value);
  const newValue = (e.target.value);
  const markdownContent = marked(newValue);
  setContent(markdownContent);
  };

  function handleClickEditor(){
    if(heightedit != "100vh"){
      heightedit="100vh";
      setHeightEdit(heightedit);
    }
    else{
      heightedit="auto";
      setHeightEdit(heightedit);
    }
  }
  function handleClickPreviewer(){
    if(heightprev != "100vh"){
      heightprev="100vh";
      setHeightPrev(heightprev);
      dis="none";
      setDis(dis);
    }
    else{
      heightprev="auto";
      setHeightPrev(heightprev);
      dis="flex";
      setDis(dis);
    }
  }

  return (
    <>
      <div className="editor_wrapper" style={{height:`${heightedit}`,display:`${dis}`}}>
        <label>
          <i className="fa fa-free-code-camp"> Editor</i>
          {(heightedit != '100vh')? <i className="fa fa-arrows-alt" onClick={handleClickEditor}></i> : <i onClick={handleClickEditor} class="fa fa-compress"></i>}
        </label>
        <textarea
          onChange={handleChange}
          id="editor"
        ></textarea>
      </div>
      <div className="preview_wrapper" style={{height:`${heightprev}`}}>
        <p id='heading'>
          <i className="fa fa-free-code-camp"> Previewer</i>
          {(heightprev != '100vh')? <i className="fa fa-arrows-alt" onClick={handleClickPreviewer}></i> : <i onClick={handleClickPreviewer} class="fa fa-compress"></i>}
        </p>
        <div
          id="preview"
          className="markdown-preview"
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
