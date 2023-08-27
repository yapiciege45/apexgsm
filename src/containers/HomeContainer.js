
import { NavbarComponent } from '@/components/NavbarComponent'
import { HomeAboutUsComponent } from '@/components/home/HomeAboutUsComponent'
import { HomeProductsComponent } from '@/components/home/HomeProductsComponent'
import { HomeTopComponent } from '@/components/home/HomeTopComponent'
import { FooterComponent } from '@/components/shared/FooterComponent'
import React from 'react'


export const HomeContainer = () => {
  return (
    <>
        <NavbarComponent />
        <HomeTopComponent />
        <HomeProductsComponent />
        <HomeAboutUsComponent />
        <HomeProductsComponent />
        <FooterComponent />
    </>
  )
}
