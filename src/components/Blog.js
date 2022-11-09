import React from 'react';

const Blog = () => {
    const sqlvsnosql = 
        {
            img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png',
        title: 'Difference between SQL and NoSQ ', 
        description: ` When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. 

        The Main Differences: 
        
        Type – 
        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
         
        
        Language – 
        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 
        
         
        
        Scalability – 
        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. 
         
        
        Structure – 
        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
         
        
        Property followed – 
        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). 
         `
    }
    const  jwt = {
        img:'https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869',
        title: ' What is JWT?',
        description: `JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

        Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it. `
    }
    const jsvsnodejs ={
        img: 'https://www.javaassignmenthelp.com/blog/wp-content/uploads/2022/01/javascript-vs-nodejs.webp',
        title: 'Differences Between Node.js and JavaScript?',
        description: `1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
        
        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
        
        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
        
        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
        
        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
        
        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.`
    }
    const nodejs= {
        img:'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
        title: ' How does Node JS handle multiple requests at the same time?',
        description: `NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.`
    }
    
    return (
        <div>
            <h2 className="text-4xl font-light text-center">Our Blogs</h2>
            {/* ---------------------------------------------------------- */}
            <div className="blog my-5">
            <div className="hero min-h-screen bg-base-200 p-1">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src={sqlvsnosql.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{sqlvsnosql.title}</h1>
      <p className="py-6"> {sqlvsnosql.description} </p>
      <button className="btn btn-primary">Read More..</button>
    </div>
  </div>
</div>

            </div>
{/* ------------------------------------------------------------------------------ */}
<div className="blog my-5 ">


<div className="hero min-h-screen bg-base-200 p-1">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src={jwt.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {jwt.title} </h1>
      <p className="py-6"> {jwt.description} </p>
      <button className="btn btn-primary">Read More..</button>
    </div>
  </div>
</div>

</div>
{/* ------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------- */}
            <div className="blog my-5">
            <div className="hero min-h-screen bg-base-200 p-1">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src={jsvsnodejs.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{jsvsnodejs.title }</h1>
      <p className="py-6">{jsvsnodejs.description} </p>
      <button className="btn btn-primary">Read More..</button>
    </div>
  </div>
</div>

            </div>
{/* ------------------------------------------------------------------------------ */}
<div className="blog my-5 ">


<div className="hero min-h-screen bg-base-200 p-1">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src={nodejs.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{nodejs.title} </h1>
      <p className="py-6">{nodejs.description} </p>
      <button className="btn btn-primary">Read More..</button>
    </div>
  </div>
</div>

</div>
{/* ------------------------------------------------------------------------- */}
        </div>
    );
};

export default Blog;