import React from 'react';
import RootLayout from '@/app/layout';
import Header from '@/components/Header/Header';
import '../app/globals.css'




const HomePage = () => {
  return (
        <div>
        <Header 
        logo="../../public/vercel.svg"
        links={[
          { label: "Home", href: "/" },
          { label: "World", href: "/world" },
          { label: "Business", href: "/business" },
          { label: "Technology", href: "/tech" },
          { label: "Sports", href: "/sports" }
        ]}
      />
        <h1>Welcome to My Next.js Website</h1>
        <p>This is a simple Next.js website example.</p>
        </div>
  );
};



export default HomePage;
