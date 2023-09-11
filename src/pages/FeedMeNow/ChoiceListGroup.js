import { useState } from "react"
import allOptions from '../../components/data/options.json'
import { ChoiceList } from "./ChoiceList"
import choiceLists from '../../components/data/choice-lists.json'

export default function ChoiceListGroup({ layoutId }) {

  const choiceLists = choiceLists.find(c => c.id === parseInt(layoutId))


    // <main style={{marginTop: 85}} >
    //     <div className='row'>
    //       <div className='col col-3' >
    //         <FeedMeNow id='1' />
    //       </div>
    //       <div className='col col-3' >
    //         <FeedMeNow id='2' />
    //       </div>
    //       <div className='col col-3' >
    //         <FeedMeNow id='3' />
    //       </div>
    //       <div className='col col-3' >
    //         <FeedMeNow id='4' />
    //       </div>
    //     </div>
    //   </main>
}