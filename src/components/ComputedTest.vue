<template>
  <div>
      <div>
          <button @click="setGender('')">全部</button>
          <button @click="setGender('male')">男</button>
          <button @click="setGender('female')">女</button>
          <ul>
              <li v-for="u in displayUsers" :key="u.id" >
                  {{u.name}} == {{u.gender}}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
let id = 0
const createUser = (name,gender)=>{
    id+=1
    return {
        id,name,gender
    }
}
export default {
    name:"ComputedTest",
    data(){
        return {
           users:[
                createUser("方方", "男"),
                createUser("圆圆", "女"),
                createUser("笑笑", "女"),
                createUser("皮皮", "男")
           ],
           gender:''
        }

    },
    methods: {
        setGender(value){
            this.gender= value
        }
    },
    computed:{
        displayUsers(){
            const hash={
                male:'男',
                female:'女'
            };
            const {users,gender} = this
            if (gender === '') {
                return this.users;
            }else if(gender === 'male'|| gender === 'female'){
                return users.filter(u=>u.gender===hash[gender])
            }else{
                throw new Error(gender+"不在列表中")
            }

        }
    }


}
</script>

<style>

</style>