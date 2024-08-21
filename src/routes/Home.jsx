import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>Welcome to my home page</h1>
      <p>
        To provide the ability for a user to navigate, we'll want to set up
        NavLinks to each available route. Each NavLink will have a "to"
        attribute which specifies the URL that should be navigated to when the
        link is clicked. We may also want to add some styling.{' '}
        <NavLink to='/' exact activeStyle={{ background: 'darkgreen' }}>
          Home
        </NavLink>
        . I've set up my links on a separate component called Navbar to keep
        everything separated and clean, so now I can simply import Navbar to
        Index.js and add the component to the Router (because NavLinks do not
        work outside of the Router) and that will complete our basic
        implementation. Notice Navbar is not contained within a Route, this is
        because we want it to show up regardless of the URL. Now the user will
        see links that, when clicked, will navigate to different parts of the
        site.
      </p>
    </section>
  );
}
