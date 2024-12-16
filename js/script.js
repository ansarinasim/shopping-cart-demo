document.querySelectorAll(".size, .color").forEach((select) => {
    select.addEventListener("change", () => {
        const size = document.querySelector(".size").value;
        const color = document.querySelector(".color").value;

        // to see the result in console
        console.log(`Selected Size: ${size}, Selected Color: ${color}`);
    });
});
