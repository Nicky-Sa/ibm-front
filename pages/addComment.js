import styles from "../styles/Home.module.css";
import Head from "next/head";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function AddComment() {
    const [selectedFile, setSelectedFile] = useState(null);
    const router = useRouter()
    const {movie} = router.query

    function submitVoice() {
        const formData = new FormData();
        formData.append("movie", movie);
        formData.append("comment", selectedFile);
        //TODO: send the comment to the back-end!
        //
        axios.post(`http://localhost:5000/add-comment`, formData, {
            "Content-Type": "multipart/form-data"
        })
            .then((res) => {
                let anger = res.data.anger;
                if (anger < 50){
                    alert(`File Upload Successful with ${anger}% anger.`);
                }
                else {
                    alert(`File Upload Successful with ${anger}% anger but not accepted!`);
                }
            })
            .catch((err) => alert(`File Upload Error`));
    }

    return (
        <div className = {styles.container}>
            <Head>
                <title>Add comment</title>
                <meta name = "description" content = "Generated by create next app"/>
                <link rel = "icon" href = "/favicon.ico"/>
            </Head>
            <main className = {styles.main}>

                <p className = {styles.description}>
                    Upload your voice comment!
                </p>
                {/*upload section*/}
                <div>
                    <label className = "w-96 block text-sm font-medium text-gray-700">Comment</label>
                    <div
                        className = "mt-1 grid grid-cols-1 justify-items-center align-items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className = "space-y-1 text-center">
                            <svg
                                className = "mx-auto h-12 w-12 text-gray-400"
                                stroke = "currentColor"
                                fill = "none"
                                viewBox = "0 0 48 48"
                                aria-hidden = "true"
                            >
                                <path
                                    d = "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth = {2}
                                    strokeLinecap = "round"
                                    strokeLinejoin = "round"
                                />
                            </svg>
                            <div className = " text-sm text-gray-600">
                                <label className = "block">
                                    <span className = "sr-only">Choose voice</span>
                                    <form encType ="multipart/form-data">
                                    <input
                                        className = "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                        type = "file" id = "comment" name = "comment"
                                        onChange = {(e) => setSelectedFile(e.target.files[0])}
                                    />
                                    </form>
                                </label>
                                <p className = "pl-1 mt-3">or drag and drop</p>
                            </div>
                            <p className = "pt-5 text-xs text-gray-500">only MP3 up to 10MB</p>
                        </div>
                    </div>
                </div>
                {/*submit voice button*/}
                <div className = "sm:px-6">
                    <button
                        type = "button"
                        onClick={submitVoice}
                        className = "mt-5 inline-flex px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </main>
        </div>

    )
}