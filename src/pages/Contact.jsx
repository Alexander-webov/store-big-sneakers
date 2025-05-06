function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for your message! 🚀");
  }
  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p>
            If you have any questions, feel free to contact us via the form or
            using the details below.
          </p>
          <div>
            <p>
              <strong>Email:</strong> support@storebigsneakers.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, New York, NY, USA
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
