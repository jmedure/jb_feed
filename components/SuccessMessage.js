/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import styles from './styles/global.css' 

export default function SuccessMessage({ children }) {
    return (
        <p className="">
        Sick. Thanks for subscribing. We'll notify you when we drop.
        {children}
        </p>  
    );
}