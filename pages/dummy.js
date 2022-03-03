// import {useState} from 'react';
// import axios from 'axios';
//
// const Form = () => {
// 	const [selectedFile, setSelectedFile] = useState(null);
//
// 	 // @ts-ignore
// 	const handleSubmit = async (event) => {
// 		 event.preventDefault()
// 		 const formData = new FormData();
// 		// @ts-ignore
// 		formData.append("selectedFile", selectedFile);
// 		 try {
// 			 const response = await axios({
// 				 method: "post",
// 				 url: "/api/upload/file",
// 				 data: formData,
// 				 headers: {"Content-Type": "multipart/form-data"},
// 			 });
// 		 } catch (error) {
// 			 console.log(error)
// 		 }
// 	 }
//
// 	// @ts-ignore
// 	const handleFileSelect = (event) => {
// 		setSelectedFile(event.target.files[0])
// 	}
//
// 	// @ts-ignore
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type="file" onChange={handleFileSelect}/>
// 			<input type="submit" value="Upload File" />
// 		</form>
// 	)
// };
//
// export default Form;
//
//
// //  <Transition appear show = {isLangOpen} as = {Fragment}>
// //  <Dialog
// //  as = "div"
// //  className = "fixed inset-0 z-10 overflow-y-auto"
// //  onClose = {() => closeModal("Lang")}
// //  >
// //  <div className = "min-h-screen px-4 text-center">
// //  <Transition.Child
// //  as = {Fragment}
// //  enter = "ease-out duration-300"
// //  enterFrom = "opacity-0"
// //  enterTo = "opacity-100"
// //  leave = "ease-in duration-200"
// //  leaveFrom = "opacity-100"
// //  leaveTo = "opacity-0"
// //  >
// //  <Dialog.Overlay className = "fixed inset-0 bg-blue opacity-30"/>
// //  </Transition.Child>
// //  <span
// //  className = "inline-block h-screen align-middle"
// //  aria-hidden = "true"
// //  >
// //  &#8203;
// //  </span>
// //  <Transition.Child
// //  as = {Fragment}
// //  enter = "ease-out duration-300"
// //  enterFrom = "opacity-0 scale-95"
// //  enterTo = "opacity-100 scale-100"
// //  leave = "ease-in duration-200"
// //  leaveFrom = "opacity-100 scale-100"
// //  leaveTo = "opacity-0 scale-95"
// //  >
// //  <div
// //  className = "inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
// //  <Dialog.Title
// //  as = "h3"
// //  className = "text-lg font-medium leading-6 text-gray-900">
// //  Select a language: </Dialog.Title>
// //  <div className = "grid grid-cols-1 grid-row-2 gap-4">
// //  {/*   lang drop down*/}
// // <div className = "top-16 mt-3.5">
// // 	<Listbox value = {selectedLang}
// // 	         onChange = {setSelectedLang}>
// // 		<div className = "relative mt-1">
// // 			<Listbox.Button
// // 				className = "relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
// //  <span
// // 	 className = "block truncate">{selectedLang.name}</span>
// // 				<span
// // 					className = "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
// //  <SelectorIcon
// // 	 className = "w-5 h-5 text-gray-400"
// // 	 aria-hidden = "true"
// //  />
// //  </span>
// // 			</Listbox.Button>
// // 			<Transition
// // 				as = {Fragment}
// // 				leave = "transition ease-in duration-100"
// // 				leaveFrom = "opacity-100"
// // 				leaveTo = "opacity-0"
// // 			>
// // 				<Listbox.Options
// // 					className = "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
// // 					{languages.map((language, languageIdx) => (
// // 						<Listbox.Option
// // 							key = {languageIdx}
// // 							className = {({active}) =>
// // 								`cursor-default select-none relative py-2 pl-10 pr-4 ${
// // 									active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
// // 								}`
// // 							}
// // 							value = {language}
// // 						>
// // 							{({selected}) => (
// // 								<>
// //  <span
// // 	 className = {`block truncate ${
// // 		 selected ? 'font-medium' : 'font-normal'
// // 	 }`}
// //  >
// //  {language.name}
// //  </span>
// // 									{selected ? (
// // 										<span
// // 											className = "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
// //  <CheckIcon className = "w-5 h-5" aria-hidden = "true"/>
// //  </span>
// // 									) : null}
// // 								</>
// // 							)}
// // 						</Listbox.Option>
// // 					))}
// // 				</Listbox.Options>
// // 			</Transition>
// // 		</div>
// // 	</Listbox>
// // </div>
// //
// // {/*<div className = "mt-4 flex justify-end">*/}
// // {/*	<button*/}
// // {/*		type = "button"*/}
// // {/*		className = "mt-5 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"*/}
// // {/*		onClick = {() => closeModal("Lang")}*/}
// // {/*	>*/}
// // {/*		<span className = "ml-3">Proceed</span>*/}
// // {/*		<ChevronDoubleRightIcon className = "w-5 h-5"*/}
// // {/*		                        aria-hidden = "true"/>*/}
// // {/*	</button>*/}
// // {/*</div>*/}
// // </div>
// // </div>
// // </Transition.Child>
// // </div>
// // </Dialog>
// // </Transition>
// //
// //----------------------------------------------------------
// /*
//  <Transition appear show = {isAddCommentOpen} as = {Fragment}>
//  <Dialog
//  as = "div"
//  className = "fixed inset-0 z-10 overflow-y-auto"
//  onClose = {() => closeModal("AddComment")}
//  >
//  <div className = "min-h-screen px-4 text-center">
//  <Transition.Child
//  as = {Fragment}
//  enter = "ease-out duration-300"
//  enterFrom = "opacity-0"
//  enterTo = "opacity-100"
//  leave = "ease-in duration-200"
//  leaveFrom = "opacity-100"
//  leaveTo = "opacity-0"
//  >
//  <Dialog.Overlay className = "fixed inset-0 bg-blue opacity-30"/>
//  </Transition.Child>
//  <span
//  className = "inline-block h-screen align-middle"
//  aria-hidden = "true"
//  >
//  &#8203;
//  </span>
//  <Transition.Child
//  as = {Fragment}
//  enter = "ease-out duration-300"
//  enterFrom = "opacity-0 scale-95"
//  enterTo = "opacity-100 scale-100"
//  leave = "ease-in duration-200"
//  leaveFrom = "opacity-100 scale-100"
//  leaveTo = "opacity-0 scale-95"
//  >
//  <div
//  className = "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//  <Dialog.Title
//  as = "h3"
//  className = "text-lg font-medium leading-6 text-gray-900">
//  Upload your comment </Dialog.Title>
//  <div className = "mt-2">
//  <p className = "text-sm text-gray-500">
//  Attention: your file must not include offensive
//  words or literals!!
//  </p>
//  <div
//  className = "flex text-sm text-gray-600 my-10 justify-center">
//  <label
//  htmlFor = "file-upload"
//  className = "relative cursor-pointer bg-white rounded-md border-indigo-500 border-2 font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//  >
//  <span className = "p-6">Upload a file</span>
//  <input id = "file-upload" name = "file-upload"
//  type = "file" className = "sr-only"/>
//  </label>
//  </div>
//
//  </div>
//
//  <div className = "mt-4 flex justify-end">
//  <button
//  type = "button"
//  className = "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
//  onClick = {addComment}
//  >
//  Send it away!
//  </button>
//  </div>
//  </div>
//  </Transition.Child>
//  </div>
//  </Dialog>
//  </Transition>
//
//  */


/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChatIcon } from '@heroicons/react/solid'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const positions = [
	{
		id: 1,
		percentage: '90%',
		text: 'very nice movie, I loved it!',
		movie: 'Lion',
		dateReleased: '2020-01-07',
	},

]

export default function Example() {
	const [comments, setComments] = useState([]);
	const router = useRouter()
	const {title} = router.query

	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-md">
			<ul role="list" className="divide-y divide-gray-200">
				{positions.map(({id, percentage, text, movie, dateReleased}) => (
					<li key={id}>
						<a href="#" className="block hover:bg-gray-50">
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-between">
									<p className="text-sm font-medium text-indigo-600 truncate">Comment #{id}</p>
									<div className="ml-2 flex-shrink-0 flex">
										<p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											{percentage}
										</p>
									</div>
								</div>
								<div className="mt-2 sm:flex sm:justify-between">
									<div className="sm:flex">
										<p className="flex items-center text-sm text-gray-500">
											<ChatIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
											{text}
										</p>
									</div>
									<div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
										<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
										<p>
											Comment released on <time dateTime={dateReleased}>{dateReleased}</time>
										</p>
									</div>
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
