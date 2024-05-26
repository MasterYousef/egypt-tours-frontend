
const useLogOut = async (fun:void) => {
    try {
      const response = await fetch('/api/delete-cookie', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        setTimeout(()=>{
            fun
            window.location.reload();
        },1000)
      } else {
        console.error('Failed to delete cookie');
      }
    } catch (error) {
      console.error('An error occurred while deleting the cookie:', error);
    }
  };
export default useLogOut