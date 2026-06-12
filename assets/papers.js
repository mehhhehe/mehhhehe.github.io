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
    blurb: "Introduces the Transformer architecture and self-attention for sequence modelling without recurrence.",
    read: "2 min read"
  },
  {
    slug: "an-image-is-worth-16x16-words",
    tag: "dl",
    title: "An Image Is Worth 16×16 Words: Transformers for Image Recognition at Scale",
    authors: "Dosovitskiy, Beyer, Kolesnikov, Weissenborn, Zhai, Unterthiner, et al.",
    venue: "ICLR",
    year: 2021,
    blurb: "Applies a standard Transformer encoder to image patches and studies when this works better than convolutional models.",
    read: "2 min read"
  },
  {
    slug: "language-models-few-shot-learners",
    tag: "ml",
    title: "Language Models Are Few-Shot Learners",
    authors: "Brown, Mann, Ryder, Subbiah, Kaplan, Dhariwal, et al. (OpenAI)",
    venue: "NeurIPS",
    year: 2020,
    blurb: "Introduces GPT-3 and shows how large language models can perform new tasks from examples in the prompt, without gradient updates.",
    read: "2 min read"
  },
  {
    slug: "lora-low-rank-adaptation",
    tag: "ml",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Hu, Shen, Wallis, Allen-Zhu, Li, Wang, Wang, Chen (Microsoft)",
    venue: "ICLR",
    year: 2022,
    blurb: "A parameter-efficient fine-tuning method that freezes the base model and learns small low-rank updates.",
    read: "2 min read"
  },
  {
    slug: "grid-like-representations",
    tag: "neuro",
    title: "Vector-based Navigation using Grid-like Representations in Artificial Agents",
    authors: "Banino et al. (DeepMind)",
    venue: "Nature",
    year: 2018,
    blurb: "Shows grid-like representations emerging in trained navigation agents.",
    read: "2 min read"
  },
  {
    slug: "transformers-hippocampal-formation",
    tag: "neuro",
    title: "Relating Transformers to Models and Neural Representations of the Hippocampal Formation",
    authors: "Whittington, Warren, Behrens",
    venue: "ICLR",
    year: 2022,
    blurb: "Relates Transformer representations to place cells, grid cells, and models of the hippocampal formation.",
    read: "2 min read"
  }
];
