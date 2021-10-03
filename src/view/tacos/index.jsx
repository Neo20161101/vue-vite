import { defineComponent,ref,onMounted } from 'vue';
import { Button } from 'ant-design-vue';
import Store from '@/AppStore';
import './style.less';
export default defineComponent({
    name: "index",
    setup(props){
        const state = ref('tacos1243')
        onMounted(()=>{
            console.log("Store,",Store)
        })
        return ()=>(
            <div className='tacos'>
                <h1>{state.value}</h1>
                <p>aboutMsg</p>
                <a href="#">dsgsgdfshfdjh</a>
                <Button type="primary">
                    Primary
                </Button>
            </div>
        )
    },
})