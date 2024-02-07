import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader'

const NewssubscriptionAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5029/hero")
  }, [])


  return (
    <>
      <section className='AdminTableContain'>
        <h1>News Subscription</h1>
      </section>
    </>
  )
}

export default NewssubscriptionAdmin