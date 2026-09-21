const heading = document.getElementById("heading");
const status = document.getElementById("status");
const message = document.getElementById("message");
const image = document.getElementById("demoImage");
const attributeStatus = document.getElementById("attributeStatus");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {

    // Step 1: Change the content
    message.textContent =
        "Content Creation: Content creation is the process of developing and sharing valuable, relevant, and engaging material to connect with a specific audience. It can take many forms, such as articles, videos, podcasts, infographics, or social media posts. It serves purposes like educating, entertaining, or inspiring people. Effective content creation involves understanding the audience's needs, planning strategically, and delivering information in a clear and creative way.";

    status.textContent = "Status: Content Changed";

    // Step 2: Change the style
    heading.style.color = "blue";
    heading.style.fontSize = "32px";

    message.style.backgroundColor = "#f0f0f0";
    message.style.padding = "15px";

    status.textContent = "Status: Content and Style Changed";

    // Step 3: Change the HTML attribute
    image.setAttribute("alt", "Updated Image");

    attributeStatus.textContent =
        "Image alt attribute: Updated Image";

    status.textContent =
        "Status: Content, Style and Attribute Changed";

    // Step 4: Change the button text
    button.textContent = "DOM Changes Completed";
});