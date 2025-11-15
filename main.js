import bodyParser from "body-parser";
import express from "express";
import sanitizeHtml from "sanitize-html";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let posts = [];


app.get("/", (req, res)=>{
    res.render("home.ejs", {posts})
})
app.get("/new", (req, res)=>{
    res.render("new-post.ejs", {posts, errorMessage: null})
})
app.get("/view/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId ); 

    if (!post) {
        return res.status(404).send("The post you are looking for was not found.");
    }
    res.render("view.ejs", { post, posts }); 
});
app.post("/new",(req,res)=>{
    const rawTitle = req.body["title"].trim();
    const rawContent = req.body["content"].trim();

    let errors = {};
    if (!rawTitle) {
        errors.title = "Post title cannot be empty.";
    }
    if (!rawContent) {
        errors.content = "Post content cannot be empty.";
    }
    if (Object.keys(errors).length > 0) {
        return res.render("new-post.ejs", {
            posts,
            errors: errors,
            oldData: { title: rawTitle, content: rawContent } 
        });
    }

    const sanitizedTitle= sanitizeHtml(rawTitle, {allowedTags:[]});
    const sanitizedContent = sanitizeHtml(rawContent, {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "br", "ul", "ol", "li", "h3", "h4"],
        allowedAttributes: { 'a': [ 'href', 'target' ]}
    });

    const id = Date.now();
    let postTitle= sanitizedTitle;
    postTitle= postTitle.slice(0,1).toUpperCase()+ postTitle.slice(1).toLowerCase();
    const postContent = sanitizedContent;

    const newPost={
        id: id,
        title: postTitle,
        content: postContent
    }
    posts.push(newPost)
    console.log(newPost);

    res.redirect("/");
})
app.get("/edit/:id", (req, res) => {
    const postId= parseInt(req.params.id);
    const post = posts.find(p => p.id === postId )
    res.render("edit.ejs", {post, posts, errorMessage: null});
})
app.post("/edit/:id" , (req,res) => {
    const postId= parseInt(req.params.id);
    const postToEdit = posts.find(p => p.id === postId )
    if(!postToEdit){
        return res.status(404).send("Post to edit was not found..");
    }
    const rawTitle = req.body["title"].trim();
    const rawContent = req.body["content"].trim();

  let errors = {};
    if (!rawTitle) {
        errors.title = "Post title cannot be empty.";
    }
    if (!rawContent) {
        errors.content = "Post content cannot be empty.";
    }
    
    if (Object.keys(errors).length > 0) {
        return res.render("edit.ejs", {
            post: postToEdit,
            posts,
            errors: errors, 
            oldData: { title: rawTitle, content: rawContent } 
        });
    }
    const sanitizedTitle= sanitizeHtml(rawTitle, {allowedTags:[]});
    const sanitizedContent = sanitizeHtml(rawContent, {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "br", "ul", "ol", "li", "h3", "h4"],
        allowedAttributes: { 'a': [ 'href', 'target' ]}
    });
    
    postToEdit.title =sanitizedTitle;
    postToEdit.content = sanitizedContent;
    res.redirect("/")
})
app.post("/delete/:id" , (req, res) =>{
    const postId= parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId );
    console.log(`Post Deleted: ID ${postId}`);
    res.redirect("/")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}.`);
})
