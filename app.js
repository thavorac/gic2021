const app = require("express")();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello World");
})

app.get("/api/users", (req, res) => {
    res.json([
        {
            name: "John",
            dob: "11/01/1995",
            address: "Somewhere"
        },
        {
            name: "John1",
            dob: "11/01/1995",
            address: "Somewhere else"
        },
    ])
})

app.listen(port, () => {
    console.log('app is running');
})