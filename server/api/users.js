export default defineEventHandler(async(event)=>{
 return await $fetch('http://localhost:5000/users', {
    method: 'GET',
  }).then((data)=>{
    console.log("data",data)
    return data
  }).catch (err=>{
    console.log("hata",err)
  })
})
