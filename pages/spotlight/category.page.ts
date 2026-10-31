import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class CategoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get pageHeading(): Locator {
    return this.page.locator('h1').first();
  }

  get productCards(): Locator {
    return this.page.locator('[data-testid="product-card"], .product-card, article.product, a[href*="/p/"]');
  }

  get filterPanel(): Locator {
    return this.page.locator('[data-testid="filters"], .filters, aside').first();
  }

  async open(categoryPath: string): Promise<void> {
    await this.page.goto(categoryPath);
    await this.waitForPageReady();
  }
}
