  import { Header } from "./components/Header";
  import { Post } from "./components/Post";
  import { Sidebar } from "./components/Sidebar";
  
  import styles from './App.module.css';

  import './global.css'

  interface Posts {
    id: number;
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    },
    content: {
      type: 'paragraph' | 'link';
      content: string;
  }[],
  publishedAt: Date
}

  const posts: Posts[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/fernandoagostinisilva.png", 
        name: "Fernando Agostini",
        role: "Dev Front-End"
      },

      content: [
        { type: 'paragraph', content: "Fala galeraa 👋" },
        { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Maratona Explorer 1, evento da Rocketseat. O nome do projeto é Revelação 🚀"},
        { type: 'link', content: "👉 https://github.com/FernandoAgostiniSilva/maratonaExplorer1 " },       
      ],
      publishedAt: new Date('2022-08-08 16:10:30'),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/fernandoagostinisilva.png", 
        name: "Fernando Agostini",
        role: "Dev Front-End"
      },

      content: [
        { type: 'paragraph', content: "Fala galeraa 👋" },
        { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Maratona Explorer 3, evento da Rocketseat. O nome do projeto é RocketCoffee 🚀"},
        { type: 'link', content: "👉 https://github.com/FernandoAgostiniSilva/Maratona-Explorer-3 " },       
      ],
      publishedAt: new Date('2022-08-09 16:10:30'),
    },
  ];

  export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post=> {
          return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}
