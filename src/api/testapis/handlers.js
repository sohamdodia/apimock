const ucFirst = str => str[0].toUpperCase() + str.slice(1);

export let hello = (request, h) => `Hello, ${request.query.name ? ucFirst(request.query.name) : 'World'}`;

