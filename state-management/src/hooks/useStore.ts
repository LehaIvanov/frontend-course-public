import { useContext } from 'react'
import { storeContext } from '../storeContext'

export const useStore = () => useContext(storeContext)
