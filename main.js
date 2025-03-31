function expo(num, power, callback) {
    if (power === 0) return callback(1);
    return expo(num, power - 1, result => callback(num * result));
}


expo(5, 3, result => console.log(result)); 


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const container = document.createElement("div");
            container.classList.add("post-container");
            document.body.appendChild(container);

            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                container.appendChild(postElement);
            });
        })
        .catch(error => console.error("მონაცემების ჩატვირთვის შეცდომა:", error));
});


async function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== "object" || obj === null) {
            return reject(new Error("არგუმენტი უნდა იყოს ობიექტი"));
        }
        try {
            const copy = JSON.parse(JSON.stringify(obj));
            resolve(copy);
        } catch (error) {
            reject(error);
        }
    });
}


deepCopy({ name: "George", age: 25 })
    .then(copy => console.log("კოპირებული ობიექტი:", copy))
    .catch(error => console.error("შეცდომა:", error.message));
