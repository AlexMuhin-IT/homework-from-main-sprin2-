import React, {
  ChangeEvent,
  KeyboardEvent,
  useState,
} from "react"
import Greeting from "./Greeting"
import { UserType } from "./HW3"

type GreetingContainerPropsType =
  {
    users: UserType[]
    addUserCallback: (
      name: string,
    ) => void
  }

export const pureAddUser =
  (
    name: string,
    setError: (
      e: string,
    ) => void,
    setName: (
      n: string,
    ) => void,
    addUserCallback: (
      name: string,
    ) => void,
  ) => {
    if (
      name.trim() !==
      ""
    ) {
      addUserCallback(
        name,
      )
      setName("")
      setError("")
    } else {
      setError(
        "Ошибка! Введите имя!",
      )
    }
  }

export const pureOnBlur =
  (
    name: string,
    setError: (
      e: string,
    ) => void,
    addUser: () => void,
  ) => {
    if (
      name.trim() ==
      ""
    ) {
      setError(
        "Ошибка! Введите имя!",
      )
    }
    addUser()
  }

export const pureOnEnter =
  (
    e: KeyboardEvent<HTMLInputElement>,
    addUser: () => void,
  ) => {
    if (
      e.key ===
      "Enter"
    ) {
      addUser()
    }
  }

const GreetingContainer: React.FC<
  GreetingContainerPropsType
> = ({
  users,
  addUserCallback,
}) => {
  const [
    name,
    setName,
  ] =
    useState<string>(
      "",
    )
  const [
    error,
    setError,
  ] =
    useState<string>(
      "",
    )

  const setNameCallback =
    (
      e: ChangeEvent<HTMLInputElement>,
    ) => {
      setName(
        e
          .currentTarget
          .value,
      )
      error &&
        setError("")
    }
  const addUser =
    () => {
      pureAddUser(
        name,
        setError,
        setName,
        addUserCallback,
      )
    }

  const onBlur =
    () => {
      pureOnBlur(
        name,
        setError,
        addUser,
      )
    }

  const onEnter = (
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    pureOnEnter(
      e,
      addUser,
    )
  }

  const totalUsers =
    users.length
  const lastUserName =
    totalUsers > 0
      ? users[
          totalUsers -
            1
        ].name
      : ""

  return (
    <Greeting
      name={name}
      setNameCallback={
        setNameCallback
      }
      addUser={
        addUser
      }
      onBlur={
        onBlur
      }
      onEnter={
        onEnter
      }
      error={error}
      totalUsers={
        totalUsers
      }
      lastUserName={
        lastUserName
      }
    />
  )
}

export default GreetingContainer
