
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.views = 0;
    this.isLive = true;
};

let post = new Post("JavaScript", "body", "Md");
console.log(post);