function Painter(color) {
    return function(object) {
        const type = object.type ? `Type: ${object.type}` : "No 'type' property occurred!";
        console.log(`${color} - ${type}`);
    };
}
