import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Share, TrendingUp, Users, BookOpen, Globe, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPosts = [
  {
    id: 1,
    name: "Priya Sharma",
    handle: "@priya_mba",
    avatar: "PS",
    avatarBg: "bg-violet-100 text-violet-700",
    time: "2h",
    content: "Just got my Wharton admit! 🎉 Used the ROI calculator here — the 5-year earnings projection made the decision so clear. GMAT 740, GPA 3.8. AMA!",
    likes: 142,
    comments: 38,
    reposts: 21,
    verified: true,
  },
  {
    id: 2,
    name: "Arjun Mehta",
    handle: "@arjun_ms_cs",
    avatar: "AM",
    avatarBg: "bg-emerald-100 text-emerald-700",
    time: "5h",
    content: "The visa risk tool flagged a weak financial document in my profile before I even applied. Fixed it, resubmitted, and got approved first attempt. This is a game changer for international students.",
    likes: 98,
    comments: 22,
    reposts: 14,
    verified: false,
  },
  {
    id: 3,
    name: "Zara Hussain",
    handle: "@zara_phd",
    avatar: "ZH",
    avatarBg: "bg-rose-100 text-rose-700",
    time: "8h",
    content: "Hot take: rankings from traditional sources are completely useless for CS programs. The match score here uses actual placement data and research fit. Placed me at CMU over Stanford based on my research area — and they were right.",
    likes: 203,
    comments: 61,
    reposts: 45,
    verified: true,
  },
  {
    id: 4,
    name: "Vikram Nair",
    handle: "@vikram_mim",
    avatar: "VN",
    avatarBg: "bg-amber-100 text-amber-700",
    time: "12h",
    content: "Compared 6 European MiM programs side by side. Cost difference between ESADE and HEC was ₹18L but the 3-year salary delta was ₹42L in HEC's favour. The comparison tool does the math instantly. No spreadsheets needed.",
    likes: 77,
    comments: 18,
    reposts: 9,
    verified: false,
  },
  {
    id: 5,
    name: "Mei Lin",
    handle: "@mei_ux",
    avatar: "ML",
    avatarBg: "bg-sky-100 text-sky-700",
    time: "1d",
    content: "As a UX researcher, I'm impressed by the document tracking feature. It's not just a checklist — it actually tells you WHY each document matters and what mistakes to avoid. Thoughtful product design.",
    likes: 56,
    comments: 11,
    reposts: 7,
    verified: false,
  },
];

const trending = [
  { topic: "#MBAAdmissions2025", posts: "12.4K posts" },
  { topic: "#CSMSPrograms", posts: "8.9K posts" },
  { topic: "#VisaTips", posts: "6.2K posts" },
  { topic: "#StudyAbroad", posts: "21K posts" },
  { topic: "#ScholarshipHunt", posts: "4.7K posts" },
];

const suggested = [
  { name: "Dr. Anita Rao", handle: "@dr_anita_counselor", avatar: "AR", avatarBg: "bg-purple-100 text-purple-700", desc: "Ex-Harvard Admissions" },
  { name: "Rohan Kapoor", handle: "@rohan_admit_help", avatar: "RK", avatarBg: "bg-teal-100 text-teal-700", desc: "MIT CS '24" },
  { name: "Shreya Patel", handle: "@shreya_mba_tips", avatar: "SP", avatarBg: "bg-rose-100 text-rose-700", desc: "Wharton MBA '25" },
];

function PostCard({ post, index }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-white border border-border rounded-2xl p-5 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${post.avatarBg}`}>
          {post.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-foreground text-sm">{post.name}</span>
            {post.verified && (
              <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">✓</span>
              </span>
            )}
            <span className="text-muted-foreground text-sm">{post.handle}</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">{post.time}</span>
          </div>
          <p className="text-foreground text-sm leading-relaxed mt-1.5 mb-4">{post.content}</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => { setLiked(!liked); setLikes(l => liked ? l - 1 : l + 1); }}
              className={`flex items-center gap-1.5 text-xs transition-colors ${liked ? "text-rose-500" : "text-muted-foreground hover:text-rose-500"}`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              {likes}
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              {post.comments}
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-emerald-500 transition-colors">
              <Repeat2 className="w-4 h-4" />
              {post.reposts}
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors ml-auto">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Community() {
  const [postText, setPostText] = useState("");

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="relative pt-16 pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
              <Users className="w-3 h-3" /> Community
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Learn from Real{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Student Journeys
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Honest stories, tips, and insights from students who've been through the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Feed */}
            <div className="space-y-4">
              {/* Compose */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-border rounded-2xl p-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                    U
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      placeholder="Share your experience, tips, or questions..."
                      rows={3}
                      className="w-full resize-none text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none"
                    />
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                      <div className="flex gap-3 text-muted-foreground">
                        <GraduationCap className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                        <Globe className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                        <BookOpen className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                      </div>
                      <Button
                        size="sm"
                        disabled={!postText.trim()}
                        className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-5 text-xs disabled:opacity-40"
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {mockPosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Trending */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white border border-border rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm text-foreground">Trending Topics</h3>
                </div>
                <div className="space-y-3">
                  {trending.map((t) => (
                    <div key={t.topic} className="cursor-pointer group">
                      <div className="text-sm font-medium text-primary group-hover:underline">{t.topic}</div>
                      <div className="text-xs text-muted-foreground">{t.posts}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Suggested */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white border border-border rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm text-foreground">Who to Follow</h3>
                </div>
                <div className="space-y-4">
                  {suggested.map((u) => (
                    <div key={u.handle} className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${u.avatarBg}`}>
                        {u.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">{u.name}</div>
                        <div className="text-xs text-muted-foreground">{u.desc}</div>
                      </div>
                      <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}