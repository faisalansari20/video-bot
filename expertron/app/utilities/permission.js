import {check, PERMISSIONS, RESULTS,request} from 'react-native-permissions';


export async function getAudioPermission(){
    try{
        let permissionStatus=await check(PERMISSIONS.ANDROID.RECORD_AUDIO);
        if(permissionStatus!=RESULTS.GRANTED){
        permissionStatus= await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
        }
        console.log('Permission is',permissionStatus)
        return (permissionStatus==RESULTS.GRANTED)
    }
    catch(err){
        console.log('error while get Audio permission',err)
        return false;
    }
}