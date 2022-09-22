import React, { Component, useState, useEffect } from 'react'

const UsersInProject = ({ user }) => {
    return (
        <div className='UserDetail'>
            <h1>Users In Project</h1>
            <div className='UserDiv'>

               {user.map((user) => {
                    return (
                        <div className='UsersInProject' key={user.id}>
                            <p> User ID
                                <span> {user.id} </span>
                            </p>
                            <p>
                                Name
                                <span> {user.name} </span>
                            </p>
                            <p>
                                Email
                                <span> {user.email}</span>
                            </p>

                            <p>
                                Role
                                <span> {user.user_type}</span>
                            </p>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default UsersInProject



