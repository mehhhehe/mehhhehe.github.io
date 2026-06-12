/* ============================================================
   ✏️  PAPER NOTES — the index for your blog
   ------------------------------------------------------------
   Each entry becomes a card on papers.html and (the first 3)
   on the home page. The full write-up for each lives in its
   own file under /posts/ — the `slug` must match the filename
   (without .html).

   tag: "ml" | "dl" | "neuro"   (controls the colored label)
   ============================================================ */
window.PAPERS = [
  {
    slug: "attention-is-all-you-need",
    tag: "dl",
    title: "Attention Is All You Need",
    authors: "Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin",
    venue: "NeurIPS",
    year: 2017,
    blurb: "The paper that removed recurrence. Self-attention turned out to be a general-purpose primitive, and most of what I work with today traces back to it.",
    read: "6 min read"
  },
  {
    slug: "an-image-is-worth-16x16-words",
    tag: "dl",
    title: "An Image Is Worth 16×16 Words: Transformers for Image Recognition at Scale",
    authors: "Dosovitskiy, Beyer, Kolesnikov, Weissenborn, Zhai, Unterthiner, et al.",
    venue: "ICLR",
    year: 2021,
    blurb: "Cut an image into patches, treat them like words, skip the convolutions. At sufficient scale, a plain transformer outperforms the CNNs vision relied on for a decade.",
    read: "6 min read"
  },
  {
    slug: "language-models-few-shot-learners",
    tag: "ml",
    title: "Language Models Are Few-Shot Learners",
    authors: "Brown, Mann, Ryder, Subbiah, Kaplan, Dhariwal, et al. (OpenAI)",
    venue: "NeurIPS",
    year: 2020,
    blurb: "GPT-3. Scale a language model far enough and it learns tasks from a few examples in the prompt, no gradient updates. Scale as a research direction, not just an engineering detail.",
    read: "7 min read"
  },
  {
    slug: "lora-low-rank-adaptation",
    tag: "ml",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Hu, Shen, Wallis, Allen-Zhu, Li, Wang, Wang, Chen (Microsoft)",
    venue: "ICLR",
    year: 2022,
    blurb: "You can't fine-tune a 175B model on your laptop, but you might not need to. Freeze the weights, learn a tiny low-rank update, and match full fine-tuning at a fraction of the cost. A practical paper.",
    read: "6 min read"
  },
  {
    slug: "grid-like-representations",
    tag: "neuro",
    title: "Vector-based Navigation using Grid-like Representations in Artificial Agents",
    authors: "Banino et al. (DeepMind)",
    venue: "Nature",
    year: 2018,
    blurb: "Train a network to self-localize and grid cells appear on their own, the same hexagonal code the brain uses to navigate. Convergence between cortex and code.",
    read: "6 min read"
  },
  {
    slug: "transformers-hippocampal-formation",
    tag: "neuro",
    title: "Relating Transformers to Models and Neural Representations of the Hippocampal Formation",
    authors: "Whittington, Warren, Behrens",
    venue: "ICLR",
    year: 2022,
    blurb: "Give a transformer the right position encoding and place cells and grid cells fall out of it: the brain's spatial code, reproduced by the architecture from paper #1.",
    read: "7 min read"
  }
];
