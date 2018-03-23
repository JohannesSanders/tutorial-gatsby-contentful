import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title.title}</Link>
    </h3>
  </div>
)
