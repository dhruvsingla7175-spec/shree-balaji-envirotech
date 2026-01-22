import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ChevronRight, FolderOpen, Archive, Newspaper } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogPost, allPosts, blogPosts } from '@/data/blogPosts';

interface BlogSidebarProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: BlogPost['category'] | null) => void;
  activeCategory: BlogPost['category'] | null;
}

const categoryLabels: Record<BlogPost['category'], string> = {
  guide: 'Guides',
  awareness: 'Industry Solutions',
  industry: 'Industry News',
  local: 'Local Focus',
};

const categoryIcons: Record<BlogPost['category'], string> = {
  guide: '📚',
  awareness: '🏭',
  industry: '📊',
  local: '📍',
};

const BlogSidebar = ({ onSearch, onCategoryFilter, activeCategory }: BlogSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Get recent posts (top 5 most recent)
  const recentPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime())
      .slice(0, 5);
  }, []);

  // Get categories with counts
  const categoryCounts = useMemo(() => {
    const counts: Record<BlogPost['category'], number> = {
      guide: 0,
      awareness: 0,
      industry: 0,
      local: 0,
    };
    allPosts.forEach(post => {
      counts[post.category]++;
    });
    return counts;
  }, []);

  // Get archives (posts grouped by month/year)
  const archives = useMemo(() => {
    const archiveMap: Record<string, number> = {};
    allPosts.forEach(post => {
      const date = new Date(post.modifiedDate);
      const key = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
      archiveMap[key] = (archiveMap[key] || 0) + 1;
    });
    return Object.entries(archiveMap).slice(0, 6);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const getPostUrl = (post: BlogPost) => {
    if (post.isAwareness && post.awarenessPath) {
      return post.awarenessPath;
    }
    return `/blog/${post.slug}`;
  };

  return (
    <aside className="lg:w-80 space-y-8">
      {/* Search Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-xl p-5 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          Search Articles
        </h3>
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleInputChange}
            className="pr-10"
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="ghost" 
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-primary"
          >
            <Search className="w-4 h-4" />
          </Button>
        </form>
      </motion.div>

      {/* Categories Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-5 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <FolderOpen className="w-5 h-5 text-primary" />
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategoryFilter(null)}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all ${
                activeCategory === null 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>📋</span>
                <span>All Posts</span>
              </span>
              <Badge variant="secondary" className="text-xs">
                {allPosts.length}
              </Badge>
            </button>
          </li>
          {(Object.keys(categoryLabels) as BlogPost['category'][]).map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategoryFilter(category)}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all ${
                  activeCategory === category 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{categoryIcons[category]}</span>
                  <span>{categoryLabels[category]}</span>
                </span>
                <Badge variant="secondary" className="text-xs">
                  {categoryCounts[category]}
                </Badge>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Recent Posts Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-xl p-5 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-primary" />
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={post.slug}>
              <Link 
                to={getPostUrl(post)}
                className="group block"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
              {index < recentPosts.length - 1 && <Separator className="mt-4" />}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Archives Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card border border-border rounded-xl p-5 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Archive className="w-5 h-5 text-primary" />
          Archives
        </h3>
        <ul className="space-y-2">
          {archives.map(([month, count]) => (
            <li key={month}>
              <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer text-muted-foreground hover:text-foreground">
                <span className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>{month}</span>
                </span>
                <Badge variant="outline" className="text-xs">
                  {count}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tags Cloud Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card border border-border rounded-xl p-5 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          Popular Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Biomass Pellets', 'Punjab', 'Coal Alternative', 'Stubble Burning', 'Industrial Fuel', 'Bathinda', 'Cost Savings', 'Boiler Fuel'].map((tag) => (
            <Badge 
              key={tag}
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* CTA Widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground shadow-lg"
      >
        <h3 className="text-lg font-bold mb-2">Need Biomass Pellets?</h3>
        <p className="text-primary-foreground/90 text-sm mb-4">
          Get premium quality pellets delivered across Punjab.
        </p>
        <Button asChild variant="secondary" className="w-full">
          <a href="tel:+916280610158">
            Call: +91 62806 10158
          </a>
        </Button>
      </motion.div>
    </aside>
  );
};

export default BlogSidebar;
