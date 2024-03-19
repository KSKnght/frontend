"use client";

import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import Table from './pages/Table'
import Create from './pages/Create'
import View from './pages/View'
import Update from './pages/Update'
import Departments from './pages/Departments'
import Create_Department from './pages/Create_Department'


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-8'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/View/:id" element={<View />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/Create_Department" element={<Create_Department />} />
        </Routes>
      </HashRouter>
    </main>
  );
}
