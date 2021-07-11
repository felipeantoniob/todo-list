import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { fadeInUp } from '../animations/index'
// import ThemeSwitcher from '../components/ThemeSwitcher'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'
import { ToDoProps } from '../interfaces'

export default function Home(): JSX.Element {
  // const initialState = JSON.parse(localStorage.getItem('toDos')) || []
  const [toDos, setToDos] = useState<ToDoProps[]>([])
  const [filteredToDos, setFilteredToDos] = useState<ToDoProps[]>([])
  const [status, setStatus] = useState('all')
  const [editToDo, setEditToDo] = useState<null | ToDoProps>(null)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    getLocalToDos()
    getLocalTheme()
  }, [])

  useEffect(() => {
    console.log(filteredToDos)
  }, [filteredToDos])

  useEffect(() => {
    console.log(status)
  }, [status])

  useEffect(() => {
    const filterHandler = (): void => {
      switch (status) {
        case 'completed':
          setFilteredToDos(toDos.filter((toDo) => toDo.completed === true))
          break
        case 'uncompleted':
          setFilteredToDos(toDos.filter((toDo) => toDo.completed === false))
          break
        default:
          setFilteredToDos(toDos)
          break
      }
    }
    const saveLocalToDos = (): void => {
      localStorage.setItem('toDos', JSON.stringify(toDos))
    }
    filterHandler()
    saveLocalToDos()
  }, [toDos, status])

  const getLocalToDos = (): void => {
    if (localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]))
    } else {
      const toDoLocal = JSON.parse(localStorage.getItem('toDos'))
      setToDos(toDoLocal)
    }
  }

  const getLocalTheme = (): void => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'dark')
    } else {
      const themeLocal = localStorage.getItem('theme')
      setTheme(themeLocal)
    }
  }

  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <Container className="min-vh-100 pb-5">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Row className="justify-content-center mb-5">
                {/* <ThemeSwitcher setTheme={setTheme} theme={theme} /> */}
              </Row>
              <Row className="justify-content-center align-items-center mb-5">
                <ToDoForm
                  toDos={toDos}
                  setToDos={setToDos}
                  setStatus={setStatus}
                  editToDo={editToDo}
                  setEditToDo={setEditToDo}
                />
              </Row>
            </motion.div>
            <Row className="px-2">
              {/* TODO: Fix list items exit animations */}
              <ToDoList
                setToDos={setToDos}
                toDos={toDos}
                filteredToDos={filteredToDos}
                setEditToDo={setEditToDo}
              />
            </Row>
          </Container>
        </motion.div>
      </main>
    </>
  )
}
