import * as React from 'react';
import { connect } from '@joyid/ckb';
import './style.css';
 
export default function App() {
  const onConnect = async () => {
    try {
      const authData = await connect();
      console.log(`JoyID user info:`, authData);
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div>
      <h1>Hello JoyID!</h1>
      <button onClick={onConnect}>Connect JoyID</button>
    </div>
  );
}