import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api';
const BLOGS_URL = `${API_BASE}/blogs`;

const Body = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(BLOGS_URL);
      setBlogs(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      setPosting(true);
      setError(null);
      await axios.post(BLOGS_URL, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setFormData({ title: '', content: '', image: '' });
      fetchBlogs();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error(err);
    } finally {
      setPosting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BLOGS_URL}/${id}`);
      fetchBlogs();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error(err);
    }
  };

  return (
    <main className="bg-gray-100 py-12 px-6 md:px-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Pollution: A Global Threat
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          From the air we breathe to the oceans we rely on, pollution affects every corner of our planet.
          Understanding its many forms is the first step toward real change.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/1200x/45/65/93/456593eec7aeb6fc47dee5d71c9a0c46.jpg"
            alt="Polluted city skyline"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Error / Loading */}
      <section className="max-w-4xl mx-auto mb-6">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        {loading && (
          <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4">
            Loading blogs...
          </div>
        )}
      </section>

      {/* Add Form */}
      <section className="max-w-4xl mx-auto mb-14">
        <form onSubmit={addBlog} className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Add a New Pollution Post
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Description"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              rows={3}
            />
            <div className="text-center">
              <button
                type="submit"
                disabled={posting}
                className={`${
                  posting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
                } text-white px-6 py-2 rounded-full font-semibold transition disabled:cursor-not-allowed`}
              >
                {posting ? 'Posting…' : 'Add Post'}
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Pollution Posts */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Types of Pollution
        </h2>

        {!loading && blogs.length === 0 && (
          <p className="text-center text-gray-500">No posts yet.</p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{blog.content}</p>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white text-sm px-4 py-1 rounded-full hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;