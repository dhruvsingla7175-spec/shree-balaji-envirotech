import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost, allPosts } from '@/data/blogPosts';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: BlogPost['category'];
  maxPosts?: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Placeholder thumbnails based on category
const categoryThumbnails: Record<BlogPost['category'], string> = {
  guide: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=250&fit=crop',
  awareness: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
  industry: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop',
  local: 'https://images.unsplash.com/photo-1518173946687-a4c036bc4add?w=400&h=250&fit=crop',
};

const categoryColors: Record<BlogPost['category'], string> = {
  guide: 'bg-primary/10 text-primary',
  awareness: 'bg-secondary/10 text-secondary',
  industry: 'bg-accent/20 text-accent-foreground',
  local: 'bg-muted text-muted-foreground',
};

const categoryLabels: Record<BlogPost['category'], string> = {
  guide: 'Guide',
  awareness: 'Awareness',
  industry: 'Industry',
  local: 'Local',
};

const getRelatedPosts = (
  currentSlug: string,
  currentCategory: BlogPost['category'],
  maxPosts: number
): BlogPost[] => {
  // First, get posts from the same category
  const sameCategoryPosts = allPosts.filter(
    post => post.slug !== currentSlug && post.category === currentCategory
  );

  // Then get other posts
  const otherPosts = allPosts.filter(
    post => post.slug !== currentSlug && post.category !== currentCategory
  );

  // Combine and limit
  const combined = [...sameCategoryPosts, ...otherPosts];
  return combined.slice(0, maxPosts);
};

const getPostUrl = (post: BlogPost): string => {
  if (post.isAwareness && post.awarenessPath) {
    return post.awarenessPath;
  }
  return `/blog/${post.slug}`;
};

const RelatedPosts = ({ currentSlug, currentCategory, maxPosts = 3 }: RelatedPostsProps) => {
  const relatedPosts = getRelatedPosts(currentSlug, currentCategory, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold text-foreground mb-8"
        >
          Related Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={getPostUrl(post)} className="block">
                <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={categoryThumbnails[post.category]}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RelatedPosts;
