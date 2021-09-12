import Voice from '@react-native-voice/voice';


export function onSpeechResult(callBack){
Voice.onSpeechResults=(results)=>{
    callBack(results)
}
}

export async function startListening(){
    // return await handleRequest(Voice.start,'en-US');
    return !!!await Voice.start('en-US');
}

export async function stopListening(){
    return await handleRequest(Voice.stop)

}
export async function cancelListening(){
    return await handleRequest(Voice.cancel)
}
export async function destroylListening(){
    return await handleRequest(Voice.destroy)
}

export function removeAllListener(){
    Voice.removeAllListeners();
}

//returns true if listening has been stopped
 async function handleRequest(requestFunction,...arg){
    try{
        return (arg)? await isSuccessFull(requestFunction,...arg):isSuccessFull(requestFunction);
     }
     catch(err){
         console.log(...arg)
         getErrorBody(err)
     }
}

async function isSuccessFull(asyncCall,...arg)
{
    //returns null if no error occurs
    let isNull=(arg)? await asyncCall(...arg): await asyncCall();
        return !!!isNull;
}

function getErrorBody(error){
    console.log('err:',error)
    return {
        error
    }
}

