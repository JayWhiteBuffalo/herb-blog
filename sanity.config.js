import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  title: 'Sage Roaming',
	basePath: '/sageroaming',
  name: 'default',
  title: 'Blog',

  projectId: 'e0uwxbx9',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
