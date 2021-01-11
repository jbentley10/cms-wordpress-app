/**
 * @file recent-articles.js
 */

// Import components
import PostPreview from '../components/post-preview'
import Button from './button';

export default function RecentArticles({ posts, buttonText }) {
  return (
    <section className={`md:px-32 lg:px-64 bg-wavy-background bg-cover bg-no-repeat pt-64 pb-12`}>
      <h2 className="text-h2 font-rylan text-center">
        Recent Articles
      </h2>
      <div className="flex mr-4">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
      {buttonText && 
        <Button
          color={`brown`}
          href={`/blog`}
          text={buttonText}
          className={`w-1/2 m-auto`}
        />
      }
    </section>
  )
}
