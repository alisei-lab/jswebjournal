import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

//Function to get the post file, used later
const getPost = fileName => fs.readFileSync(path.resolve("content/", `${fileName}.md`), "utf-8");

//GET method to answer the GET request coming from the client
export function get(req, res, next) {

  //Destruct, get "slug" var from the request var "params", see https://sapper.svelte.dev/docs#Arguments
  const { slug } = req.params;

  //Assign the post file to the var "post" 
  const post = getPost(slug);

  //Function exposed by 'marked', useful to manipolate text before parsing the markdown
  const renderer = new marked.Renderer();

  // use hljs (highlight.js) to highlight our blocks codes
  renderer.code = (source, lang) => {
    const { value: highlighted } = hljs.highlight(lang, source);

    return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`;
  };

  //Parse the md to get front matter (metadata) and content as an object
  const { data, content } = grayMatter(post);

  //Assign to "htmlContent" var the content parsed with marked 
  const htmlContent = marked(content, { renderer });

  //Check if everything succesful, if it IS the server answer with 200 and the parsed data, if NOT return a 404
  if (htmlContent) {

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({ htmlContent, ...data }));

  } else {

    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      }));
      
  }
}