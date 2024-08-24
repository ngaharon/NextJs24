
import {  redirect } from "next/navigation";

export default function account() {

    // assume that profile info is null
    const userProfileInfo = null;

    if(userProfileInfo === null) redirect('profile')

    return <h1>Account page</h1>
}