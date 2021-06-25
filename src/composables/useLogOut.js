import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)
const isPending = ref(false)

const logOut = async () => {
  error.value = null
  isPending.value = true

  try {
    await projectAuth.signOut()
    isPending = false
    
  } catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending = false
  }
}

const useLogOut = () => {
  return { logOut, error, isPending }
}

export default useLogOut