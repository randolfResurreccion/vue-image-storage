import { createRouter, createWebHistory } from 'vue-router'
import AuthHandler from '@/components/AuthHandler'
import ImageList from '@/components/ImageList'
import UploadForm from '@/components/UploadForm'

const routes = [
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler,
  },
  {
    path: '/',
    name: 'ImageList',
    component: ImageList,
  },
  {
    path: '/upload',
    name: 'UploadForm',
    component: UploadForm,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
