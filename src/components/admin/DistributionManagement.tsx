import { Plus, Send, Clock, BarChart, Image as ImageIcon } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function DistributionManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">配信管理</h2>
          <p className="text-gray-600">LINE配信の作成・予約・効果測定を管理します</p>
        </div>
        <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
          <Plus className="size-4" />
          新規配信作成
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">配信一覧</TabsTrigger>
          <TabsTrigger value="scheduled">予約配信</TabsTrigger>
          <TabsTrigger value="analytics">効果測定</TabsTrigger>
        </TabsList>

        {/* 配信一覧 */}
        <TabsContent value="list" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">総配信数</p>
              <p className="text-gray-900 text-2xl">342</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">平均開封率</p>
              <p className="text-gray-900 text-2xl">58%</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">平均クリック率</p>
              <p className="text-gray-900 text-2xl">35%</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-gray-900 mb-4">配信履歴</h3>
            
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">【重要】資格更新のお知らせ</h4>
                      <Badge className="bg-green-600">配信済</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">更新期限が近い会員への通知配信</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>配信日時: 2025/11/18 10:00</span>
                      <span>配信数: 645名</span>
                      <Badge variant="outline">会員向け</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-center">
                    <div>
                      <p className="text-gray-600 text-sm">開封率</p>
                      <p className="text-green-600 text-xl">68%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">クリック率</p>
                      <p className="text-blue-600 text-xl">42%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">12月イベント案内</h4>
                      <Badge className="bg-green-600">配信済</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">12月開催予定イベントの案内配信</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>配信日時: 2025/11/15 14:00</span>
                      <span>配信数: 1,248名</span>
                      <Badge variant="outline">全体配信</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-center">
                    <div>
                      <p className="text-gray-600 text-sm">開封率</p>
                      <p className="text-green-600 text-xl">58%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">クリック率</p>
                      <p className="text-blue-600 text-xl">35%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">会員向け週次ニュース</h4>
                      <Badge className="bg-green-600">配信済</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">週次の最新情報とお知らせ</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>配信日時: 2025/11/11 10:00</span>
                      <span>配信数: 645名</span>
                      <Badge variant="outline">会員向け</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-center">
                    <div>
                      <p className="text-gray-600 text-sm">開封率</p>
                      <p className="text-green-600 text-xl">52%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">クリック率</p>
                      <p className="text-blue-600 text-xl">28%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* 予約配信 */}
        <TabsContent value="scheduled" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="size-5 text-blue-600" />
              <h3 className="text-gray-900">予約配信一覧</h3>
            </div>
            
            <div className="space-y-3">
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">新年のご挨拶とイベント案内</h4>
                      <Badge className="bg-blue-600">予約中</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">2026年の活動予定とイベント案内</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        <span>配信予定: 2026/01/01 09:00</span>
                      </div>
                      <span>配信数: 1,248名</span>
                      <Badge variant="outline">全体配信</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">編集</Button>
                    <Button variant="outline" size="sm">削除</Button>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">1月スキルアップ研修案内</h4>
                      <Badge className="bg-blue-600">予約中</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">C単位取得可能な研修のご案内</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        <span>配信予定: 2025/12/20 14:00</span>
                      </div>
                      <span>配信数: 324名</span>
                      <Badge variant="outline">C単位不足会員</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">編集</Button>
                    <Button variant="outline" size="sm">削除</Button>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900">更新期限リマインド</h4>
                      <Badge className="bg-blue-600">予約中</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">更新期限3ヶ月前の自動リマインド</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        <span>配信予定: 2026/01/01 10:00</span>
                      </div>
                      <span>配信数: 48名</span>
                      <Badge variant="outline">更新対象者</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">編集</Button>
                    <Button variant="outline" size="sm">削除</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* 効果測定 */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="size-5 text-blue-600" />
                <h3 className="text-gray-900">配信タイプ別開封率</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">会員向け情報</span>
                    <span className="text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">イベント案内</span>
                    <span className="text-green-600">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">更新リマインド</span>
                    <span className="text-amber-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">週次ニュース</span>
                    <span className="text-purple-600">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="size-5 text-green-600" />
                <h3 className="text-gray-900">セグメント別開封率</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">全会員</span>
                    <span className="text-blue-600">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">更新対象者</span>
                    <span className="text-amber-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">単位不足会員</span>
                    <span className="text-orange-600">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">非会員</span>
                    <span className="text-gray-600">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-gray-900 mb-4">配信効果の推移</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">グラフ表示エリア（Recharts使用）</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
