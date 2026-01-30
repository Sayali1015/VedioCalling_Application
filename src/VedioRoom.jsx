import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const VedioRoom = () => {
    const {id} = useParams();
    const meeting = (element)=>{
      const appID = 475062040;
      const serverSecret = "8d0cab5dd71971a4a455f9466665030e";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id ,  Date.now().toString() , `${id}`);

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5173/${id}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall],To implement group call, modify the parameter here to [ZegoUIKitPrebuilt.GroupCall].
        },
      })
    }

  return (
    <>
      <div ref={meeting}/>
    </>
  )
}

export default VedioRoom
