const initialState = {
    posts: [
    {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02/02/2022'),
        category: 'Sport',
        author: 'John Doe'
    },
    {
        id: '2',
        title: 'Article title II',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('01-07-2023'),
        category: 'News',
        author: 'Amanda Doe'
    },
    {
        id: '3',
        title: 'Article title III',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('08-01-2024'),
        category: 'Movies',
        author: 'Jack Nicholson'
    }
    ],

    categories: ['Sport', 'News', 'Movies']
  
  };
  
  export default initialState;